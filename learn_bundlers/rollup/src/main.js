import './style.css';

module.exports = function(){
    import ('./foo.js').then(({default: foo}) => console.log(foo))
}