# admin.py
from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'date', 'time', 'guests')
    search_fields = ('name', 'email', 'phone')