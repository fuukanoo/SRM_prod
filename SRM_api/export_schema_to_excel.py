import pandas as pd
from database import Base  # SQLAlchemy の Base
import models  # すべてのモデルをインポートして、Base.metadata に登録させる

# 各テーブル・カラム情報をリストにまとめる
rows = []

for table in Base.metadata.sorted_tables:
    for column in table.columns:
        # デフォルト値の取得 (callable な場合は文字列変換)
        default_val = ""
        if column.default is not None:
            try:
                default_val = column.default.arg
            except Exception:
                default_val = str(column.default.arg)
        
        # 外部キー情報の取得
        fk_list = []
        for fk in column.foreign_keys:
            # 例: "他テーブル(他カラム)" の形式にまとめる
            fk_info = f"{fk.column.table.name}({fk.column.name})"
            fk_list.append(fk_info)
        foreign_keys = ", ".join(fk_list)
        
        row = {
            "Table Name": table.name,
            "Column Name": column.name,
            "Data Type": str(column.type),
            "Nullable": column.nullable,
            "Default": default_val,
            "Primary Key": column.primary_key,
            "Foreign Keys": foreign_keys,
        }
        rows.append(row)

# DataFrame に変換
df = pd.DataFrame(rows)

# Excel ファイルに出力
output_file = "テーブル定義書_SRM.xlsx"
df.to_excel(output_file, index=False)

print(f"Schema exported to {output_file}")
