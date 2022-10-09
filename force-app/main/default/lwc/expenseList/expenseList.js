import { LightningElement, wire } from 'lwc';
import getExpenses from '@salesforce/apex/ExpenseController.getExpenses';

export default class ExpenseList extends LightningElement {

  @wire(getExpenses) myExpenses;
  
}