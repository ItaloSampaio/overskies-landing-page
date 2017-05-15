export default {

    inverseLerp(a, b, value) {

        return (value - a) / (a + b)
    },

    between(min, max, value) { 
        
        return Math.min(Math.max(min, value), max)
    },

    ensureLoop(min, max, value) {   
        
        if(value > max)   return 0
        if(value < 0)     return max        
        return value
    }
}