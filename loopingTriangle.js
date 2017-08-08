//Conor Kennedy
//8/7/17

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var triangle = '';
for (var i = 0; i < 7; i++) {
 console.log(triangle += '#');
}
