from config import db


class FloorLocation(db.Model):
    __tablename__ = "floor_location"
    id = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String(16))
    floor_top = db.Column(db.INTEGER)
    floor_mid = db.Column(db.INTEGER)
    floor_low = db.Column(db.INTEGER)