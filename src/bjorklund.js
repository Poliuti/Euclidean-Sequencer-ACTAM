function shift(arr, direction, n) {
   var times = n > arr.length ? n % arr.length : n;
   return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
}

export default function bjorklund(steps, pulses, rotations) {
	
	steps = Math.round(steps);
	pulses = Math.round(pulses);	

	if(pulses > steps || pulses === 0 || steps === 0) {
		return [];
	}

	let pattern = [];
	let counts = [];
	let remainders = [];
	let divisor = steps - pulses;
	remainders.push(pulses);
	let level = 0;

	while(true) {
		counts.push(Math.floor(divisor / remainders[level]));
		remainders.push(divisor % remainders[level]);
		divisor = remainders[level]; 
	       level += 1;
		if (remainders[level] <= 1) {
			break;
		}
	}
	
	counts.push(divisor);

	
	let build = function(level) {
		
		if (level > -1) {
			for (let i=0; i < counts[level]; i++) {
				build(level-1); 
			}	
			if (remainders[level] !== 0) {
	        	build(level-2);
			}
		} else if (level === -1) {
	           pattern.push(0);	
		} else if (level === -2) {
           pattern.push(1);        
		} 
	};

	build(level);
	return shift(pattern.reverse(), 1, rotations);
}