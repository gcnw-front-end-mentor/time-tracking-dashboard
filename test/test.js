// 'bdd' stands for "behavior driven development"
import {daily, weekly, monthly} from '../script.js';
var assert = chai.assert;
mocha.setup('bdd');


describe('Updating when a duration is clicked', function(){
// DAILY CLICK TESTING DAILY CLICK TESTING DAILY CLICK TESTING DAILY CLICK TESTING //
    describe('Updating Screen when DAILY is clicked', function(){
        describe('Updating the WORK box with DAILY data', function(){
            it('Updates current hours to 5', function(){
                daily.click();
                let expected = '5hrs';
                let actual = document.getElementById('workInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 7', function(){
                daily.click();
                let expected = '7hrs';
                let actual = document.getElementById('workInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the PLAY box with DAILY data', function(){
            it('Updates current hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('playInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 2', function(){
                daily.click();
                let expected = '2hrs';
                let actual = document.getElementById('playInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the STUDY box with DAILY data', function(){
            it('Updates current hours to 0', function(){
                daily.click();
                let expected = '0hrs';
                let actual = document.getElementById('studyInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('studyInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the EXERCISE box with DAILY data', function(){
            it('Updates current hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SOCIAL box with DAILY data', function(){
            it('Updates current hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('socialInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 3', function(){
                daily.click();
                let expected = '3hrs';
                let actual = document.getElementById('socialInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SELFCARE box with DAILY data', function(){
            it('Updates current hours to 0', function(){
                daily.click();
                let expected = '0hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 1', function(){
                daily.click();
                let expected = '1hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        })
    }),
// WEEKLY CLICK TESTING WEEKLY CLICK TESTING WEEKLY CLICK TESTING WEEKLY CLICK TESTING //
    describe('Updating Screen when Weekly is clicked', function(){
        describe('Updating the WORK box with WEEKLY data', function(){
            it('Updates current hours to 32', function(){
                weekly.click();
                let expected = '32hrs';
                let actual = document.getElementById('workInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 36', function(){
                weekly.click();
                let expected = '36hrs';
                let actual = document.getElementById('workInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the PLAY box with WEEKLY data', function(){
            it('Updates current hours to 10', function(){
                weekly.click();
                let expected = '10hrs';
                let actual = document.getElementById('playInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 8', function(){
                weekly.click();
                let expected = '8hrs';
                let actual = document.getElementById('playInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the STUDY box with WEEKLY data', function(){
            it('Updates current hours to 4', function(){
                weekly.click();
                let expected = '4hrs';
                let actual = document.getElementById('studyInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 7', function(){
                weekly.click();
                let expected = '7hrs';
                let actual = document.getElementById('studyInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the EXERCISE box with WEEKLY data', function(){
            it('Updates current hours to 4', function(){
                weekly.click();
                let expected = '4hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 5', function(){
                weekly.click();
                let expected = '5hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SOCIAL box with WEEKLY data', function(){
            it('Updates current hours to 5', function(){
                weekly.click();
                let expected = '5hrs';
                let actual = document.getElementById('socialInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 10', function(){
                weekly.click();
                let expected = '10hrs';
                let actual = document.getElementById('socialInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SELFCARE box with WEEKLY data', function(){
            it('Updates current hours to 2', function(){
                weekly.click();
                let expected = '2hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 2', function(){
                weekly.click();
                let expected = '2hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        })
    }),
// MONTHLY CLICK TESTING MONTHLY CLICK TESTING MONTHLY CLICK TESTING MONTHLY CLICK TESTING //
    describe('Updating Screen when MONTHLY is clicked', function(){
        describe('Updating the WORK box with MONTHLY data', function(){
            it('Updates current hours to 103', function(){
                monthly.click();
                let expected = '103hrs';
                let actual = document.getElementById('workInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 128', function(){
                monthly.click();
                let expected = '128hrs';
                let actual = document.getElementById('workInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the PLAY box with MONTHLY data', function(){
            it('Updates current hours to 23', function(){
                monthly.click();
                let expected = '23hrs';
                let actual = document.getElementById('playInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 29', function(){
                monthly.click();
                let expected = '29hrs';
                let actual = document.getElementById('playInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the STUDY box with MONTHLY data', function(){
            it('Updates current hours to 13', function(){
                monthly.click();
                let expected = '13hrs';
                let actual = document.getElementById('studyInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 19', function(){
                monthly.click();
                let expected = '19hrs';
                let actual = document.getElementById('studyInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the EXERCISE box with MONTHLY data', function(){
            it('Updates current hours to 11', function(){
                monthly.click();
                let expected = '11hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 18', function(){
                monthly.click();
                let expected = '18hrs';
                let actual = document.getElementById('exerciseInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SOCIAL box with MONTHLY data', function(){
            it('Updates current hours to 21', function(){
                monthly.click();
                let expected = '21hrs';
                let actual = document.getElementById('socialInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 23', function(){
                monthly.click();
                let expected = '23hrs';
                let actual = document.getElementById('socialInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        }),
        describe('Updating the SELFCARE box with MONTHLY data', function(){
            it('Updates current hours to 7', function(){
                monthly.click();
                let expected = '7hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('h1').innerHTML;
                assert.equal(expected,actual);
            }),
            it('Updates previous hours to 11', function(){
                monthly.click();
                let expected = '11hrs';
                let actual = document.getElementById('selfCareInfo').querySelector('span').innerHTML;
                assert.equal(expected,actual);
            })
        })
    })
})