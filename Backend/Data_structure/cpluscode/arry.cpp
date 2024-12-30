#include <iostream>
using namespace std;

int main() {
    int marks[5] = {15, 20, 18, 10, 17};
    /*cout << marks[0] <<endl;
    cout << marks[1] <<endl;
    cout << marks[2] <<endl;
    cout << marks[3] <<endl;  // Prints the element at index 2 (third element)
    */
   /* for(int i=0; i<=4; i++)
    {
        cout<<marks[i]<<endl;
    }
 */ // Transversing ..............
    /*
    int a [5]={8,5,6,9,7};
    for (int ii=0; ii<5; ii++){
        cout<< a[ii]<<endl;
    }
    */
    // Inserting at Beginning..........
    int array[10], n, x;
    
    cout << "Enter size of an array:";
    cin >> n;
    
    cout << "Enter array elements:";
    for (int i = 0; i < n; i++) {
        cin >> array[i];
    }
    
    cout << "Enter the value to insert at the beginning:";
    cin >> x;
    
    // Shift elements to the right
    for (int i = n - 1; i >= 0; i--) {
        array[i + 1] = array[i];
    }
    
    // Insert x at the beginning
    array[0] = x;
    
    // Increment size of the array
    n++;
    
    // Print the updated array
    cout << "Updated array elements:";
    for (int i = 0; i < n; i++) {
        cout << " " << array[i];
    }
    
    return 0;
}