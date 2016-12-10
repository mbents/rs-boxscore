function getMainModel() {
    return new Object({
        teams: [],
        years: '',
        selectedTeam: '',
        selectedYear: '',
        games: []
    });
}

function getBoxscoreModel() {
    return new Object({
        game_id: '',
        date: '',
        game_number: '',
        day_of_week: '',
        start_time: '',
        DH_used_flag: '',
        day_night_flag: '',
        visiting_team: '',
        home_team: '',
        game_site: '',
        vis_starting_pitcher: '',
        home_starting_pitcher: '',
        home_plate_umpire: '',
        first_base_umpire: '',
        second_base_umpire: '',
        third_base_umpire: '',
        left_field_umpire: '',
        right_field_umpire: '',
        attendance: '',
        PS_scorer: '',
        translator: '',
        inputter: '',
        input_time: '',
        edit_time: '',
        how_scored: '',
        pitches_entered: '',
        temperature: '',
        wind_direction: '',
        wind_speed: '',
        field_condition: '',
        precipitation: '',
        sky: '',
        time_of_game: '',
        number_of_innings: '',
        visitor_final_score: '',
        home_final_score: '',
        visitor_hits: '',
        home_hits: '',
        visitor_errors: '',
        home_errors: '',
        visitor_left_on_base: '',
        home_left_on_base: '',
        winning_pitcher: '',
        losing_pitcher: '',
        save_for: '',
        GW_RBI: '',
        visitor_batter_1: '',
        visitor_position_1: '',
        visitor_batter_2: '',
        visitor_position_2: '',
        visitor_batter_3: '',
        visitor_position_3: '',
        visitor_batter_4: '',
        visitor_position_4: '',
        visitor_batter_5: '',
        visitor_position_5: '',
        visitor_batter_6: '',
        visitor_position_6: '',
        visitor_batter_7: '',
        visitor_position_7: '',
        visitor_batter_8: '',
        visitor_position_8: '',
        visitor_batter_9: '',
        visitor_position_9: '',
        home_batter_1: '',
        home_position_1: '',
        home_batter_2: '',
        home_position_2: '',
        home_batter_3: '',
        home_position_3: '',
        home_batter_4: '',
        home_position_4: '',
        home_batter_5: '',
        home_position_5: '',
        home_batter_6: '',
        home_position_6: '',
        home_batter_7: '',
        home_position_7: '',
        home_batter_8: '',
        home_position_8: '',
        home_batter_9: '',
        home_position_9: ''
    });
}