from rest_framework import viewsets
from rest_framework.response import Response
from beefy_wallet_api.models import *
from .serializer import TransactionsSerializer,MoneySourcesSerializer
from django.contrib.auth.models import User


class TransactionsViewSet(viewsets.ModelViewSet):

    serializer_class = TransactionsSerializer

    def get_queryset(self):
        user = self.request.user
        expenses_incomes = Transactions.objects.filter(money_source__author__username = user)
        return expenses_incomes

    def create(self, request, *args, **kwargs):
        user = self.request.user
        expenses_incomes_data = request.data
        new_expense = Transactions.objects.create(money_source=MoneySources.objects.get(name=expenses_incomes_data['money_source'],author__username = user), value=expenses_incomes_data["value"], note=expenses_incomes_data[
            "note"],creation_date=expenses_incomes_data['creation_date'],transaction_type= expenses_incomes_data['transaction_type'])

        new_expense.save()

        serializer = MoneySourcesSerializer(new_expense)

        return Response(serializer.data)


    # def retrieve(self, request, *args, **kwargs):
    #     user = self.request.user
    #     print('###############################',user)
    #     expenses = Expenses.objects.filter(money_source__author__username = user)
    #     serializer = ExpensesSerializer(expenses, many=True)
    #     return Response(serializer.data)


# 
# class IncomesViewSet(viewsets.ModelViewSet):
# 
#     serializer_class = IncomesSerializer
# 
#     def get_queryset(self):
#         incomes = Incomes.objects.all()
#         return incomes
# 
# 
#     def retrieve(self, request, *args, **kwargs):
#         user = self.request.user
#         incomes = Incomes.objects.filter(money_source__author = user)
#         serializer = IncomesSerializer(incomes, many=True)
#         return Response(serializer.data)


    

class MoneySourcesViewSet(viewsets.ModelViewSet):
    serializer_class = MoneySourcesSerializer

    def get_queryset(self):
        user = self.request.user
        money_sources = MoneySources.objects.filter(author__username = user)
        return money_sources

    def create(self, request, *args, **kwargs):
        user = self.request.user
        money_source_data = request.data

        new_money_source = MoneySources.objects.create(author=User.objects.get(username=user), name=money_source_data["name"], amount=money_source_data[
            "amount"])

        new_money_source.save()

        serializer = MoneySourcesSerializer(new_money_source)

        return Response(serializer.data)


# class StudentsViewSet(viewsets.ModelViewSet):
#     serializer_class = StudentsSerializer
# 
#     def get_queryset(self):
#         student = Students.objects.all()
#         return student
# 
#     def create(self, request, *args, **kwargs):
#         data = request.data
# 
#         new_student = Students.objects.create(
#             name=data["name"], age=data['age'], grade=data["grade"])
# 
#         new_student.save()
# 
#         for module in data["modules"]:
#             module_obj = Modules.objects.get(module_name=module["module_name"])
#             new_student.modules.add(module_obj)
# 
#         serializer = StudentsSerializer(new_student)
# 
#         return Response(serializer.data)
# 
# 
# class MoneySourcesViewSet(viewsets.ModelViewSet):
#     serializer_class = MoneySourcesSerializer
# 
#     def get_queryset(self):
#         module = MoneySources.objects.all()
#         return module