from django.contrib import messages
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render, redirect
from django.contrib.admin.views.decorators import staff_member_required
from .forms import BookingForm
from .models import Booking

@staff_member_required
def home(request):
    bookings = Booking.objects.all()
    return render(request, 'base.html', {'bookings': bookings})

def book_table(request):
    if request.method == 'POST':
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('booking_success')
        else:
            return HttpResponse('Error: Invalid form data')
    else:
        return HttpResponse('Error: Invalid request method')



def booking_success(request):
    booking = Booking.objects.latest('id')  # Get the latest booking
    context = {
        'booking_id': booking.id,
        'name': booking.name,
        'booking_date': booking.date,
        'booking_time': booking.time
    }
    return render(request, 'booking_success.html', context)