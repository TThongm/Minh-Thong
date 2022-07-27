// JavaScript Document

function Xoa()
{
    x.reset();
}
function Send()
{
    
    
    var txtname=document.getElementById("txtname");
    if(txtname.value =="")
        {
            alert("Tên Không Được Để Trống!!!");
            txtname.focus();
        }
    else if(txtname.value.length < 5)
        {
            alert("Tên Phải hơn 5 kí tự!!!");
            txtname.focus();
        }
     else if(isNaN (txtname.value)==false)
        {
            alert("Tên Nhập phải là kí tự !!!");
            txtname.focus();
        }
        var txtemail=document.getElementById("txtemail");
    if(txtemail.value=="")
        {
            alert("Email Không Được Để Trống!!!");
            txtemail.focus();
        }
        var txttel=document.getElementById("txttel");
    if(txttel.value=="")
    {
        alert("Tel Không Được Để Trống!!!")
        txttel.focus();
    }    
    else
        alert("Bạn đã gửi thành công");
}
