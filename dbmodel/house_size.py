from config import db


class HouseSize(db.Model):
    __tablename__ = "house_size"
    id = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String)
    interval0 = db.Column(db.INTEGER)
    interval1 = db.Column(db.INTEGER)
    interval2 = db.Column(db.INTEGER)
    interval3 = db.Column(db.INTEGER)