from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

import secrets

def home(request):
    nonce = secrets.token_urlsafe(16)  
    context = {'nonce': nonce}
    if request.method == "POST":
        cf_name = request.POST['cf-name']
        cf_email = request.POST['cf-email']
        cf_number = request.POST['cf-number']
        cf_budgets = request.POST['cf-budgets']
        cf_message = request.POST['cf-message']

        # Email validation
        try:
            validate_email(cf_email)
        except ValidationError:
            # Handle invalid email (e.g., display an error message)
            context['error'] = "Invalid email address."
            return render(request, 'home/index.html', context)

        # Input sanitization (example using bleach)
        import bleach
        cf_name = bleach.clean(cf_name)
        cf_message = bleach.clean(cf_message)

        try:
            # Send contact email
            send_mail(
                cf_name,
                cf_message,
                cf_email,
                ['blintues@yahoo.com'],
                fail_silently=False,  # Change to False to raise exceptions
            )
            context['cf_name'] = cf_name
        except BadHeaderError:
            # Handle email error (e.g., log the error or display a message)
            context['error'] = "Invalid header found."
            return render(request, 'home/index.html', context)

        return render(request, 'home/index.html', context)
    else:
        return render(request, 'home/index.html', context)

def cs50d(request):
    nonce = secrets.token_urlsafe(16)  
    context = {'nonce': nonce}
    return render(request, 'home/cs50d.html', context)  # Include context here

def achieve(request):
    nonce = secrets.token_urlsafe(16)  
    context = {'nonce': nonce}
    return render(request, "home/achievments.html", context)