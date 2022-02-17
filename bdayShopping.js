function shop(n,k,output=[],index=1) {
    if (output.length === k) {
        console.log(`${output.join(" ")}`);
        return;
    }
    for (let i = index; i <= n; i++) {
        output.push(i);
        shop(n,k,output,i+1);
        output.pop();
    }
}
shop(4,2);
