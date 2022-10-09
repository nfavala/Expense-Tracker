import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import EXPENSE_OBJECT from '@salesforce/schema/Expense__c';
import NAME_FIELD from '@salesforce/schema/Expense__c.Name';
import AMOUNT_FIELD from '@salesforce/schema/Expense__c.Amount__c';
import CATEGORY_FIELD from '@salesforce/schema/Expense__c.Category__c';
import DATE_FIELD from '@salesforce/schema/Expense__c.Expense_Date__c';
import WEEKLY_EXPENSE_FIELD from '@salesforce/schema/Expense__c.Weekly_expense__c';

export default class ExpenseCreator extends LightningElement {
  objectName = EXPENSE_OBJECT ;
  fieldList = [NAME_FIELD, AMOUNT_FIELD, CATEGORY_FIELD, DATE_FIELD, WEEKLY_EXPENSE_FIELD];

  handleSuccess(event){
    console.log(event.detail.id);
    const toastEvent = new ShowToastEvent({
        title:"Expense created",
        message:"Woow! New Expense created!",
        variant:"success"
    });
    this.dispatchEvent(toastEvent);
}

  @api recordId;
  @api objectApiName;
}