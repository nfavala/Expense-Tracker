public with sharing class ExpenseController {
    
     @AuraEnabled(cacheable=true)
        public static List<Expense__c> getExpenses() {

        return [SELECT Name, Amount__c, Category__c, Expense_Date__c, Weekly_expense__c 
                    FROM Expense__c];
        }
        
}