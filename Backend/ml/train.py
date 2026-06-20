import psycopg2
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder

import joblib

conn = psycopg2.connect(
    "postgresql://postgres:postgres@localhost:5432/uber_clone"
)

df = pd.read_sql(
    'SELECT * FROM "DemandRecord"',
    conn
)

# Features
X = df[
    [
        "hour",
        "dayOfWeek",
        "activeCaptains",
        "avgFare",
        "pickupArea"
    ]
]

# Target
y = df["rideRequests"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

preprocessor = ColumnTransformer(
    transformers=[
        (
            "pickupArea",
            OneHotEncoder(handle_unknown="ignore"),
            ["pickupArea"]
        )
    ],
    remainder="passthrough"
)

model = Pipeline(
    [
        ("preprocessor", preprocessor),
        ("regressor", RandomForestRegressor(
            n_estimators=100,
            random_state=42
        ))
    ]
)

model.fit(X_train, y_train)

score = model.score(X_test, y_test)

print("R² Score:", score)

joblib.dump(model, "ml/models/demand_model.pkl")

print("Model saved!")

print("Training rows:", len(X_train))
print("Testing rows:", len(X_test))

print(df["pickupArea"].value_counts())