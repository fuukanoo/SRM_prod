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

# ================================
# カジュアル面接用スキーマ
# ================================

# 出力用スキーマ
class CasualInterviewSchema(BaseModel):
    id: int
    candidate_id: int
    result: Optional[str] = None
    honesty: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ（idは不要）
class CasualInterviewCreate(BaseModel):
    candidate_id: int
    result: Optional[str] = None
    honesty: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    notes: Optional[str] = None

    class Config:
        orm_mode = True

# ================================
# 一次面接用スキーマ
# ================================

# 出力用スキーマ
class FirstInterviewSchema(BaseModel):
    id: int
    candidate_id: int
    pass_fail: Optional[str] = None
    assertion: Optional[str] = None
    excuse: Optional[str] = None
    sincerity: Optional[str] = None
    avoidance: Optional[str] = None
    initiative: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    fact_interpretation: Optional[str] = None
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ
class FirstInterviewCreate(BaseModel):
    candidate_id: int
    pass_fail: Optional[str] = None
    assertion: Optional[str] = None
    excuse: Optional[str] = None
    sincerity: Optional[str] = None
    avoidance: Optional[str] = None
    initiative: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    fact_interpretation: Optional[str] = None
    notes: Optional[str] = None

    class Config:
        orm_mode = True

# ================================
# 二次面接用スキーマ
# ================================

# 出力用スキーマ
class SecondInterviewSchema(BaseModel):
    id: int
    candidate_id: int
    pass_fail: Optional[str] = None
    sincerity: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ
class SecondInterviewCreate(BaseModel):
    candidate_id: int
    pass_fail: Optional[str] = None
    sincerity: Optional[str] = None
    team_love: Optional[str] = None
    charm: Optional[str] = None
    humility: Optional[str] = None
    notes: Optional[str] = None

    class Config:
        orm_mode = True

# ================================
# 最終面接用スキーマ
# ================================

# 出力用スキーマ
class FinalInterviewSchema(BaseModel):
    id: int
    candidate_id: int
    technical_skills: Optional[str] = None
    problem_solving: Optional[str] = None
    logical_thinking: Optional[str] = None
    leadership: Optional[str] = None
    career_vision: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ
class FinalInterviewCreate(BaseModel):
    candidate_id: int
    technical_skills: Optional[str] = None
    problem_solving: Optional[str] = None
    logical_thinking: Optional[str] = None
    leadership: Optional[str] = None
    career_vision: Optional[str] = None

    class Config:
        orm_mode = True

# ================================
# フォロー面談用スキーマ
# ================================

# 出力用スキーマ
class FollowupInterviewSchema(BaseModel):
    id: int
    candidate_id: int
    interview_date: Optional[date] = None
    notes: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True

# 入力用スキーマ
class FollowupInterviewCreate(BaseModel):
    candidate_id: int
    interview_date: Optional[date] = None
    notes: Optional[str] = None

    class Config:
        orm_mode = True