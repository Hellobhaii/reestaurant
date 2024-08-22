from django.db import models
from .utils import generate_booking_id


class Booking(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    guests = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    id = models.CharField(max_length=8, primary_key=True, default=generate_booking_id)

    def __str__(self):
        return f"Booking for {self.name} on {self.date} at {self.time}"
