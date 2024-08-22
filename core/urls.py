from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('book-table/', views.book_table, name='book_table'),
    path('booking_success/', views.booking_success, name='booking_success'),

]