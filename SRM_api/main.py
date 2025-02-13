# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import engine, SessionLocal, Base
from models import Candidate, CasualInterview, FirstInterview, SecondInterview, FinalInterview, FollowupInterview
from schemas import (CandidateCreate, CandidateSchema, CasualInterviewCreate, CasualInterviewSchema, FirstInterviewCreate, 
                     FirstInterviewSchema, SecondInterviewCreate, SecondInterviewSchema, FinalInterviewCreate, FinalInterviewSchema, FollowupInterviewCreate, FollowupInterviewSchema)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SRM API")

# フロントエンドが http://localhost:3000 で動作している場合
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

# ---------- 候補者エンドポイント ----------
@app.post("/candidates/", response_model=CandidateSchema)
def create_candidate(candidate: CandidateCreate, db: Session = Depends(get_db)):
    db_candidate = Candidate(**candidate.dict())
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    return db_candidate

@app.get("/candidates/", response_model=List[CandidateSchema])
def read_candidates(db: Session = Depends(get_db)):
    return db.query(Candidate).all()

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

# ---------- カジュアル面接エンドポイント ----------
@app.post("/casual_interviews/", response_model=CasualInterviewSchema)
def create_casual_interview(casual: CasualInterviewCreate, db: Session = Depends(get_db)):
    db_casual = CasualInterview(**casual.dict())
    db.add(db_casual)
    db.commit()
    db.refresh(db_casual)
    return db_casual

# ---------- 一次面接エンドポイント ----------
@app.post("/first_interviews/", response_model=FirstInterviewSchema)
def create_first_interview(first: FirstInterviewCreate, db: Session = Depends(get_db)):
    db_first = FirstInterview(**first.dict())
    db.add(db_first)
    db.commit()
    db.refresh(db_first)
    return db_first

# ---------- 二次面接エンドポイント ----------
@app.post("/second_interviews/", response_model=SecondInterviewSchema)
def create_second_interview(second: SecondInterviewCreate, db: Session = Depends(get_db)):
    db_second = SecondInterview(**second.dict())
    db.add(db_second)
    db.commit()
    db.refresh(db_second)
    return db_second

# ---------- 最終面接エンドポイント ----------
@app.post("/final_interviews/", response_model=FinalInterviewSchema)
def create_final_interview(final: FinalInterviewCreate, db: Session = Depends(get_db)):
    db_final = FinalInterview(**final.dict())
    db.add(db_final)
    db.commit()
    db.refresh(db_final)
    return db_final

# ---------- フォロー面談エンドポイント ----------
@app.post("/followup_interviews/", response_model=FollowupInterviewSchema)
def create_followup_interview(followup: FollowupInterviewCreate, db: Session = Depends(get_db)):
    db_followup = FollowupInterview(**followup.dict())
    db.add(db_followup)
    db.commit()
    db.refresh(db_followup)
    return db_followup

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
