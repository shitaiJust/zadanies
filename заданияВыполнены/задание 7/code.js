   //1    
    //  a=prompt("Введите сумму вклада")*1
    //              b=prompt("Введите число месяцев")*1
    //              for(var i=1;i<=b;i++){
    //              a+=a*0.07}
    //              document.write(a)

    
    // 2 
   // a=prompt("Введите факториал")
    //          var b=1
    //          for(var i =2;i<=a;i++){
    //          b=b*i
    //          }
    //          document.write(b)   
    
    
    //  3
   //  x = prompt("Введите число")*1;
    //          var y = 0;
    //          for(; x; x = Math.floor(x / 10)) {
    //          y *= 10;
    //          y += x % 10;
    //          }
    //          document.write(y);


    // 4 
    // document.write("Четные:")
    //          for(var i=100;i<=1000;i++){
    //          if(i%2==0)
    //          document.write(i+" ")
    //          }
    //          document.write("<br>"+"Четные:")
    //          for(var i=100;i<=1000;i++){
    //          if(i%2==1)
    //          document.write(i+" ")
    //          }


    //5
    // var a=234
    // var b=0
    // var c=1
    // while(a>0)
    // {
    // b=b+(a%10)
    // c=c*(a%10)
    // a=Math.floor(a / 10)
    // }
    // document.write(b+"<br>")
    // document.write(c)


    //21
    // v1=prompt("v1")*1
    // t1=prompt("t1")*1
    // v2=prompt("v2")*1
    // t2=prompt("t2")*1
    // v=v1+v2
    // t=(v1*t1+v2*t2)/2
    // document.write(v+"<br>")
    // document.write(t+"<br>")


    //25
    // var G=0,0000000000667
    // m1=prompt("m1")*1
    // m2=prompt("m2")*1
    // r=prompt("r")*1
    // F=G*m1*m2/r*r
    // document.write(F+"<br>")


    //24
    // a=prompt("Введите сторону равностороннего треугольника")*1
    // s=a*a*1.7/4
    // document.write(s)


    //23
    // a=prompt("Введите высоту")
    // var g=9.8
    // t=2*a/g
    // document.write(t)


    //22
    // a=prompt("Введите длину гипотенузы")*1
    // b=prompt("Введите длину катета")*1
    // c=Math.sqrt(a)-Math.sqrt(b)
    // document.write(Math.sqrt(c))


    //20
    var a=prompt("Введите число")*1
    a=Math.abs(a);
    var b=prompt("Введите число")*1
    b=Math.abs(b);
    var c=(a+b)/2;
    document.writeln(c)
    var aa=a*b
    var z=Math.sqrt(aa)
    document.write("<br>")
    document.write(z)   