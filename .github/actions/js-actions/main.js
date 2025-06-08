const core=require('@actions/core');
const github=require('@actions/github');
const exec=require('@actions/exec');

function run(){
    core.notice('Ejecutando Desde JS Actions!');
    const name = core.getInput('name',{required: true});
    core.notice('Enviando un saludo a ' + name);
}
run();