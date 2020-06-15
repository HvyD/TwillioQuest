<?php

function isABotCheck($isABot = true)
{
  if ($isABot === true) {
    return true;
  }
  return false;
}




function passwordCheck($providedPassword, $actualPassword)
{
  if ($providedPassword != $actualPassword) {
    return false;
  }
  return true;
}


function securityAnswerCheck($providedAnswer, $actualAnswer)
{
  if (strpos($actualAnswer, $providedAnswer) === 0) {
    return true;
  }
  return false;
}


function passwordTriesHitLimit($tries)
{
  $limit = 5;
  if (($tries <= $limit) && ($tries >= 0)) {
    return false;
  }
  return true;
}

$isABot = isABotCheck(true);
$passwordCheck = passwordCheck('provided password', 'actual password');
$securityAnswerCheck = securityAnswerCheck('provided answer', 'actual answer');
$passwordTries = passwordTriesHitLimit(3);
print 'is a bot check: ';
var_dump($isABot);
print 'password check: ';
var_dump($passwordCheck);
print 'security answer: ';
var_dump($securityAnswerCheck);
print 'password tries: ';
var_dump($passwordTries);

?>
