{
    let values = this.state.values;
    
    let ballX = 10;
    let ballY = 2;
    let deltaX = 1;
    let deltaY = 1;
    
for(;;){
    
    if(ballX == 27 || ballX == 0){
        deltaX *= -1;
    }
    
    if(ballY == 4 || ballY == 0){
        deltaY *= -1;
    }
    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 28; j++) {
            if(ballX == j && ballY == i){
                values[i][j][0] = 255;
                values[i][j][1] = 0;
                values[i][j][2] = 0;
            } else {
                values[i][j][0] = 0;
                values[i][j][1] = 0;
                values[i][j][2] = 0;
            }
        }
    }
    
    ballX += deltaX;
    ballY += deltaY;
    
    this.setState({ values });
    await this.sleep(300);
}
}
    