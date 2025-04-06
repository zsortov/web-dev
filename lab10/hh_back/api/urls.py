from django.urls import path
from . import views_fbv, views_cbv

urlpatterns = [
    path('companies/', views_fbv.company_list),
    path('companies/<int:pk>/', views_fbv.company_detail),
    path('companies/<int:pk>/vacancies/', views_fbv.company_vacancies),
    path('vacancies/', views_cbv.VacancyList.as_view()),
    path('vacancies/<int:pk>/', views_cbv.VacancyDetail.as_view()),
]