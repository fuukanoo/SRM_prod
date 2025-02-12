# schemas.py
from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

# 出力用スキーマ
class CandidateSchema(BaseModel):
    id: int
    name: str
    furigana: Optional[str] = None
    photo_url: Optional[str] = None
    education: Optional[str] = None
    career: Optional[str] = None
    resume_url: Optional[str] = None
    career_sheet_url: Optional[str] = None
    route: Optional[str] = None
    birthdate: Optional[date] = None
    address: Optional[str] = None
    origin: Optional[str] = None
    employment_status: Optional[str] = None
    university: Optional[str] = None
    high_school: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ（idは不要）
class CandidateCreate(BaseModel):
    name: str
    furigana: Optional[str] = None
    photo_url: Optional[str] = None
    education: Optional[str] = None
    career: Optional[str] = None
    resume_url: Optional[str] = None
    career_sheet_url: Optional[str] = None
    route: Optional[str] = None
    birthdate: Optional[date] = None
    address: Optional[str] = None
    origin: Optional[str] = None
    employment_status: Optional[str] = None
    university: Optional[str] = None
    high_school: Optional[str] = None

    class Config:
        orm_mode = True
