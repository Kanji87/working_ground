// $(function () {
//     function e() {
//         var e = moment(),
//             t = e.clone().set('hour', 12).set('minute', 0).set('second', 0).day(5 === e.isoWeekday() && e.get('hour') >= 12 ? 12 : 5).toDate();
//         return t;
//     }

//     $('.js-activity-timer').countdown({
//         until: e(),
//         format: 'dHM',
//         labels: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
//         labels1: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
//         onExpiry: function () {
//             $(this).countdown('option', {
//                 until: e()
//             });
//         }
//     });
// });
