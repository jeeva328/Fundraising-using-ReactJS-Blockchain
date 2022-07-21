// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract fundraise{
    address public owner;
    address[] public donour;
    uint[] public amt;
    uint public balto;
    uint public val;

    constructor () payable
    {
        owner  = msg.sender;
    }

event donating(address _from , address _to , uint _val);

     modifier only(){
        require(msg.sender == owner);
        _;
    }

     function donate(address payable _to) public payable {
        emit donating(msg.sender,_to,msg.value); 
        _to.transfer(msg.value);
        balto = _to.balance;
         donour.push(msg.sender);
         amt.push(msg.value);
    }

    function getDetails() public view returns(address[] memory , uint[] memory){
        return (donour,amt);
    }

    function getbalofto() public view returns(uint){
        return balto;
    }

function showContractBal() public view returns(uint){
        return address(this).balance;
    }

}