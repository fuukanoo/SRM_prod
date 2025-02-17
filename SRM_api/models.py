# models.py
from sqlalchemy import Column, Integer, String, Text, Date, TIMESTAMP, ForeignKey, func
from database import Base

# 候補者テーブル
class Candidate(Base):
    __tablename__ = "candidates"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    furigana = Column(String(255))
    photo_url = Column(String(512))         # 写真ファイルの保存場所（パスまたはURL）
    education = Column(Text)
    career = Column(Text)
    resume_url = Column(String(512))        # 履歴書ファイルのパス/URL
    career_sheet_url = Column(String(512))  # 職務経歴書ファイルのパス/URL
    route = Column(String(255))
    birthdate = Column(Date)
    address = Column(String(255))
    origin = Column(String(255))
    employment_status = Column(String(255))
    university = Column(String(255))
    high_school = Column(String(255))
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

# カジュアル面接テーブル
class CasualInterview(Base):
    __tablename__ = "casual_interviews"
    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidates.id", ondelete="CASCADE"), nullable=False)
    result = Column(String(50))
    honesty = Column(String(50))
    team_love = Column(String(50))
    charm = Column(String(50))
    humility = Column(String(50))
    notes = Column(Text)   # 自由記述の備考欄
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

# 1次面接テーブル
class FirstInterview(Base):
    __tablename__ = "first_interviews"
    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidates.id", ondelete="CASCADE"), nullable=False)
    pass_fail = Column(String(50))            # 合否（合格or不合格）
    assertion = Column(String(50))            # 意見主張（1,2,3）
    excuse = Column(String(50))               # 言い訳（1,2,3）
    sincerity = Column(String(50))            # 誠実（1,2,3）
    avoidance = Column(String(50))            # 逃げ癖（1,2,3）
    initiative = Column(String(50))           # イニシアチブ（1,2,3）
    team_love = Column(String(50))            # チーム愛（1,2,3）
    charm = Column(String(50))                # 愛嬌（1,2,3）
    humility = Column(String(50))             # 謙虚さと責任感（1,2,3）
    fact_interpretation = Column(String(50))    # 事実と解釈（1,2,3）
    notes = Column(Text)                      # 備考（自由記述）
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

# 2次面接テーブル
class SecondInterview(Base):
    __tablename__ = "second_interviews"
    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidates.id", ondelete="CASCADE"), nullable=False)
    technical_skills = Column(String(50))
    problem_solving = Column(String(50))
    logical_thinking = Column(String(50))
    leadership = Column(String(50))
    career_vision = Column(String(50))
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

# 最終面接テーブル
class FinalInterview(Base):
    __tablename__ = "final_interviews"
    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidates.id", ondelete="CASCADE"), nullable=False)
    technical_skills = Column(String(50))
    problem_solving = Column(String(50))
    logical_thinking = Column(String(50))
    leadership = Column(String(50))
    career_vision = Column(String(50))
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())

# フォロー面談テーブル（複数回可能）
class FollowupInterview(Base):
    __tablename__ = "followup_interviews"
    id = Column(Integer, primary_key=True, index=True)
    candidate_id = Column(Integer, ForeignKey("candidates.id", ondelete="CASCADE"), nullable=False)
    interview_date = Column(Date)  # 面談実施日（任意）
    notes = Column(Text)           # 自由記述の備考
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())
