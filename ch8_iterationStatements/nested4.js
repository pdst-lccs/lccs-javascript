// Happy numbers
for (let a = 0; a<10; a++)
  for (let b = 0; b<10; b++)
    for (let c = 0; c<10; c++)
      for (let d = 0; d<10; d++)
        if (a+b == c+d)
           console.log("Happy Number:", a, b, c, d);
