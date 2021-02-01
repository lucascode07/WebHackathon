const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline, diasEl, horasEl, minutosEl, segundosEl) => {
    const dias = document.getElementById(diasEl);
    const horas = document.getElementById(horasEl);
    const minutos = document.getElementById(minutosEl);
    const segundos = document.getElementById(segundosEl);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        dias.textContent = t.remainDays
        horas.textContent = t.remainHours
        minutos.textContent = t.remainMinutes
        segundos.textContent = t.remainSeconds
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
        }

    }, 1000)
};

countdown('Feb 1 2021 18:00:00 GMT-0500', 'dias', 'horas', 'minutos', 'segundos');
