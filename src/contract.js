import Notification  from './notification';

export default class Contract {
    constructor() {
        this.notifications = []
    }

    isRequired(value, property, message){
        if (!value || value.length <= 0)
            this.notifications.push(new Notification(property, message));

        return this;
    }
    
    hasMinLen(value, min,property, message){
        if (!value || value.length < min)
            this.notifications.push(new Notification(property, message));
        
        return this;
    }
    
    hasMaxLen(value, max, property, message){
        if (!value || value.length > max)
            this.notifications.push(new Notification(property, message));
        
        return this;
    }
    
    isFixedLen(value, len, property, message){
        if (value.length != len)
            this.notifications.push(new Notification(property, message));

        return this;
    }
    
    isEmail(value, property, message){
        var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value))
            this.notifications.push(new Notification(property, message));
        
        return this;
    }
}