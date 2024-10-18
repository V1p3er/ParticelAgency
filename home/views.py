from django.shortcuts import render
from django.core.mail import send_mail

def home(request):
    if request.method == "POST":
        cf_name = request.POST['cf-name']
        cf_email = request.POST['cf-email']
        cf_number = request.POST['cf-number']
        cf_budgets = request.POST['cf-budgets']
        cf_message = request.POST['cf-message']
        #send contact email
        send_mail(
            cf_name,
            cf_message,
            cf_email,
            ['blintues@yahoo.com'],
            cf_budgets,
            cf_number,
        )
        return render(request,'home/index.html', {'cf_name':cf_name})
    else:
        return render(request,'home/index.html')
def projects_pg1(request):
    return render(request, 'home/projects-pg1.html')
def projects_pg2(request):
    return render(request, 'home/projects-pg2.html')
def cs50d(request):
    return render(request, 'home/cs50d.html')
def achieve(request):
    return render(request, "home/achievments.html")
