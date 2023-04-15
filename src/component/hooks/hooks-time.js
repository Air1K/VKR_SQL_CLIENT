function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function DateTime()
    {
        const current_datetime = new Date();
        const day = zero_first_format(current_datetime.getDate());
        const month = zero_first_format(current_datetime.getMonth()+1);
        const year = current_datetime.getFullYear();
        const hours = zero_first_format(current_datetime.getHours());
        const minutes = zero_first_format(current_datetime.getMinutes());

        return year+"-"+month+"-"+day+"T"+hours+":"+minutes;
    }
export default DateTime()