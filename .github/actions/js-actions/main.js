const core=require('@actions/core');
const github=require('@actions/github');
const exec=require('@actions/exec');

function run(){
    print ("Ejecutando JS Actions!");
    core.notice('Ejecutando Desde JS Actions!');
}
run();