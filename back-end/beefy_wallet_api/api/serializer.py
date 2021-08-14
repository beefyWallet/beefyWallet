from rest_framework import serializers
from beefy_wallet_api.models import *

class MoneySourcesSerializer(serializers.ModelSerializer):
    # name = TransactionsSerializer(many=False)
    class Meta:
        model = MoneySources
        fields = '__all__'

class TransactionsSerializer(serializers.ModelSerializer):
    # money_source = MoneySourcesSerializer(many=False)

    class Meta:
        model = Transactions
        fields = '__all__'
        depth = 1


        # depth = 1
# class IncomesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Incomes
#         fields = '__all__'
#         depth = 1




# class StudentsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Students
#         fields = ['id', 'name', 'age', 'grade', 'modules']
#         depth = 1