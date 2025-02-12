# database.py
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# .env ファイルから環境変数をロード
load_dotenv()

SQLALCHEMY_DATABASE_URL = os.environ.get("DATABASE_URL")
if not SQLALCHEMY_DATABASE_URL:
    raise Exception("DATABASE_URL is not set in the environment variables.")

# SQLAlchemy エンジンの作成（echo=True で実行されるSQLをログに出力）
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)

# データベースセッションの作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# モデル定義用の基底クラス
Base = declarative_base()
