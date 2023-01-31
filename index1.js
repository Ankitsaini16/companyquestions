function Balancefruits(a,m,rs){
    let rupee,left;
    if(a>m){
      left=a-m
      rupee=rs-left
      return rupee
    }
    else if(m>a){
      left=m-a
      rupee=left+rs
      return rupee
    }
    else{
      return rs
    }
  }
  console.log(Balancefruits(6,4,6));



