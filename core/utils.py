import uuid

def generate_booking_id():
    return uuid.uuid4().hex[:8].upper()