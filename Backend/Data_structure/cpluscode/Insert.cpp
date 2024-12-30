#include<iostream>
using namespace std;
int main(){

       int array[10],n,pos,x;
       cout<<"enter the value of arry:";
       cin>> n;
       for(int i=0;i<n; i++){
        cin>>array[i];
        cout<<"old array:"<<array[i]<<endl;
       }
       cout<<"which position you want to inserest:";
       cin>>x;
       for(int i=n-1;i<=pos-1;i--){
       	array[i+1]=array[i];
       }
       array[pos-1]=x;
       n++;
       for(int i=0;i<n; i++){
       	cout<<array[i]<<endl;
       }
	return 0;
}