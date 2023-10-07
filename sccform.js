        let inside = document.getElementById('incons');
        let outside = document.getElementById('outcons');
        let univ_name = document.getElementById('univ-name');
        let firstname= document.getElementById('firstname');
        let lastname= document.getElementById('lastname');
        let email= document.getElementById('mail');
        let choose= document.getElementsByName('uinv');
        let univ = document.getElementById('univ');
        let spec = document.getElementById('spec');
        let subject= document.getElementById('inputGroupSelect02');
        let cus_select = document.getElementById('cust');
        let cus_input = document.getElementById('custom');
        let submit = document.getElementById('submit');
        let qr=document.getElementById('qr');
        let sections = document.getElementsByClassName('container');
        let info='';
        onload = function () {
            inside.checked = true;
            Univ_name();
        }
        function Univ_name(){
            if (inside.checked===true) {
                univ_name.classList.add('d-none');
            }
            if(outside.checked===true){
                univ_name.classList.remove('d-none');
            }
        }
       
        subject.onclick= function(){
          if (subject.value==="custom") {
            cus_input.classList.remove('d-none');
          }else{
            cus_input.classList.add('d-none');
          }
        }
        var qrcode = new QRCode(qr, {
          text:"the subjects i'll attend "+subject.value ,
          width: 150,
          height: 150,
        });
        function showinfos(){
          for (let index = 0; index < sections.length-1; index++) {
            sections[index].classList.add('d-none');
          }
          sections[4].classList.remove('d-none');
        }
        function validInfo(){
          showinfos();
          if (choose[0].checked) {
          if (subject.value==="custom") {
            info = `${firstname.value} ${lastname.value} <br>I study in Constantine2 university.<br>
              ${spec.value}<br>the subjects i'll attend: ${cus_input.value}`;
          } else {
            info = `${firstname.value} ${lastname.value} <br>I study in Constantine2 university.<br>
              ${spec.value}<br>the subjects i'll attend: ${subject.value}`;
          }
          } else {
            if (subject.value==="custom") {
              info = `${firstname.value} ${lastname.value} <br>I study in ${univ.value}.<br>
                ${spec.value}<br>the subjects i'll attend: ${cus_input.value}`;
              
            } else {
              info = `${firstname.value} ${lastname.value} <br>I study in ${univ.value}.<br>
                ${spec.value}<br>the subjects i'll attend: ${subject.value}`;
            }
          }
          document.getElementById('info').innerHTML= info;
        }
