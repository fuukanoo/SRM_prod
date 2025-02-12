# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
from models import Candidate, CasualInterview, FirstInterview, SecondInterview, FinalInterview, FollowupInterview

# 開発初期などはこれでテーブル作成（本番では Alembic の運用を推奨）
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SRM API")

# データベースセッションの依存関係
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to SRM API"}

# 候補者作成のサンプルエンドポイント（POST）
@app.post("/candidates/")
def create_candidate(candidate: Candidate, db: Session = Depends(get_db)):
    db.add(candidate)
    db.commit()
    db.refresh(candidate)
    return candidate

# 候補者一覧の取得（GET）
@app.get("/candidates/")
def read_candidates(db: Session = Depends(get_db)):
    return db.query(Candidate).all()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3001, reload=True)
