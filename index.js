// 1.Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

   function triangel(x,y,z){
    if (x == y && y === z)
     console.log("Equilateral Triangle");

    else if (x==y || y==z|| z==x)
     console.log("Isosceles Triangle");

    else
     console.log("Scalene Triangle");
   }
  
    let x = 5, y = 6, z = 7;

    triangel(x,y,z);


// 2. Write a function using switch case to find the grade of a student based
//    on marks obtained
//    a. “S grade” if the marks are between 90 and 100.
//    b. “A grade” if the marks are between 80 and 90.
//    c. “B grade” if the marks are between 70 and 80.
//    d. “C grade” if the marks are between 60 and 70.
//    e. “D grade” if the marks are between 50 and 60.
//    f. “E grade” if the marks are between 40 and 50.
//    g. “Student has failed” if the marks are between 0 and 40.
//    h. Else output “Invalid marks”.  
   

       function grade(marks){
        switch(marks >=0){
         case 90 <= marks && marks <= 100:
            console.log("S grade");
            break;
          case 80 <= marks && marks <= 90:
            console.log("A grade");
            break;
          case 70 <= marks && marks <= 80:
            console.log("B grade");
            break;
          case 60 <= marks && marks <= 70:
            console.log("C grade");
            break;
          case 50 <= marks && marks <= 60:
            console.log("D grade");
            break;
          case 40 <= marks && marks <= 50:
            console.log("E grade");
            break;
          case 0 <= marks && marks <= 40:
            console.log("Student has Failed");
            break;
          default:
            console.log("Invalid Marks");
            break;
       }
     }
     grade(100);



// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
//  under 1000

    
   let sum = 0;
   for(let x = 0; x < 10; x++){
      
      if(x%3===0 || y%5===0)
      {
        sum += x;
      }
   }
   console.log(sum);


//  4. Write a program to find the factorial of all prime numbers between a
//  given range . Range will be passed as 2 values in the function
//  parameters. eg- if it is needed to find the values for numbers 1-100, then
//  function declaration can look like - function prime(1,100).


function prime(n1,n2)
{
    let j = 0
    let i = 0
    for(i=n1;i<=n2;i++)
    {
       for(j=2;j<=i;j++)
       {
            if(i%j===0)
                break;        
       }
       if(i===j)
            factorial(i);
    }
}

function factorial(x)
{
    let result = 1;
    for(k=x;k>1;k--)
    {  
        result = result*k;
    }
    console.log(result)
}

prime(1,5)