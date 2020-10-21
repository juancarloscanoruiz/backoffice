@extends('layaout.app')

@section('scripts')
    <script src="{{ asset('./js/calendar.js') }}"></script>
@endsection

@section('content')
    <article id="date-picker">
        <div class="date-picker-container">
            <div class="date-picker-header">
                <p class="a-text-semibold-greyish-brown-two mb-0 text-small">Confirmar las fechas <br />seleccionadas</p>
                <div class="dates-picked-container">
                    <div class="date-start">
                        <p class="a-text-semibold-greyish-brown-two mb-0 text-smaller">Inicio: 01-10-2020</p>
                    </div>
                    <div class="date-end">
                        <p class="a-text-semibold-greyish-brown-two mb-0 text-smaller">Fin: DD-MM-YYYY </p>
                    </div>
                </div>
            </div>
            <div class="months">
                <img class="arrows prev-month" src="{{ asset('./images/synopsis/arrow.svg') }}" />
                <div class="month a-text-bold-brown-two">Octubre</div>
                <img class="arrows next-month" src="{{ asset('./images/synopsis/arrow.svg') }}" />
            </div>
            <div class="days-container">
                <div class="days">
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                    <p class="date-day a-text-bold-brown-two">1</p>
                </div>
            </div>

    </article>
@endsection
