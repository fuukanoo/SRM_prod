# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import engine, SessionLocal, Base
from models import Candidate
from schemas import CandidateCreate, CandidateSchema

app = FastAPI(title="SRM API")

# 開発初期：テーブル作成（本番では Alembic を推奨）
Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to SRM API"}

# POST エンドポイント：入力は CandidateCreate を使う
@app.post("/candidates/", response_model=CandidateSchema)
def create_candidate(candidate: CandidateCreate, db: Session = Depends(get_db)):
    db_candidate = Candidate(**candidate.dict())
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

# GET エンドポイント：候補者一覧取得
@app.get("/candidates/", response_model=List[CandidateSchema])
def read_candidates(db: Session = Depends(get_db)):
    return db.query(Candidate).all()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)

@app.put("/candidates/{candidate_id}", response_model=CandidateSchema)
def update_candidate(candidate_id: int, candidate_update: CandidateCreate, db: Session = Depends(get_db)):
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    if not candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    for key, value in candidate_update.dict(exclude_unset=True).items():
        setattr(candidate, key, value)
    db.commit()
    db.refresh(candidate)
    return candidate

@app.delete("/candidates/{candidate_id}")
def delete_candidate(candidate_id: int, db: Session = Depends(get_db)):
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    if not candidate:
        raise HTTPException(status_code=404, detail="Candidate not found")
    db.delete(candidate)
    db.commit()
    return {"detail": "Candidate deleted"}
