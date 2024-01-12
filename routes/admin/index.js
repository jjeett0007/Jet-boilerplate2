/**
 * index.js
 * @description :: index route file of admin platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/admin/auth',require('./auth'));
router.use(require('./departmentsRoutes'));
router.use(require('./noteRoutes'));
router.use(require('./encounterRoutes'));
router.use(require('./orderRoutes'));
router.use(require('./CustomerRoutes'));
router.use(require('./PlanRoutes'));
router.use(require('./TaskRoutes'));
router.use(require('./Chat_messageRoutes'));
router.use(require('./CommentRoutes'));
router.use(require('./Chat_groupRoutes'));
router.use(require('./ToDoRoutes'));
router.use(require('./Appointment_scheduleRoutes'));
router.use(require('./EventRoutes'));
router.use(require('./Appointment_slotRoutes'));
router.use(require('./MasterRoutes'));
router.use(require('./BlogRoutes'));
router.use(require('./userRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./projectRouteRoutes'));
router.use(require('./routeRoleRoutes'));
router.use(require('./userRoleRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
