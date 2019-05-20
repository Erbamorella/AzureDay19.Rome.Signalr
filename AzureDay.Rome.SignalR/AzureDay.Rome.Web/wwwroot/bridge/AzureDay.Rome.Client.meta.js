Bridge.assembly("AzureDay.Rome.Client", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = ["System.Collections.Generic","System","Bridge.Spaf","Bridge.Ioc","AzureDay.Rome.Shared","AzureDay.Rome.Client.Hubs","AzureDay.Rome.Client.Repositories","AzureDay.Rome.Client.ViewModels.Models","AzureDay.Rome.Remote.DataSources","System.Threading.Tasks","System.Reflection"];
    $m("Bridge.Spaf.CustomRoutesConfig", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CreateRoutes","t":8,"sn":"CreateRoutes","rt":$n[0].IList$1(Bridge.Navigation.IPageDescriptor)},{"ov":true,"a":2,"n":"Body","t":16,"rt":$,"g":{"ov":true,"a":2,"n":"get_Body","t":8,"rt":$,"fg":"Body"},"fn":"Body"},{"ov":true,"a":2,"n":"DisableAutoSpafAnchorsOnNavigate","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_DisableAutoSpafAnchorsOnNavigate","t":8,"rt":$n[1].Boolean,"fg":"DisableAutoSpafAnchorsOnNavigate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"DisableAutoSpafAnchorsOnNavigate"},{"ov":true,"a":2,"n":"HomeId","t":16,"rt":$n[1].String,"g":{"ov":true,"a":2,"n":"get_HomeId","t":8,"rt":$n[1].String,"fg":"HomeId"},"fn":"HomeId"},{"a":1,"n":"__Property__Initializer__Body","t":4,"rt":$,"sn":"__Property__Initializer__Body"},{"a":1,"n":"__Property__Initializer__DisableAutoSpafAnchorsOnNavigate","t":4,"rt":$n[1].Boolean,"sn":"__Property__Initializer__DisableAutoSpafAnchorsOnNavigate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"__Property__Initializer__HomeId","t":4,"rt":$n[1].String,"sn":"__Property__Initializer__HomeId"}]}; }, $n);
    $m("Bridge.Spaf.SpafApp", function () { return {"nested":[$n[2].SpafApp.Messages],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ContainerConfig","is":true,"t":8,"sn":"ContainerConfig","rt":$n[1].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[1].Void},{"a":1,"n":"RegisterAllViewModels","is":true,"t":8,"sn":"RegisterAllViewModels","rt":$n[1].Void},{"a":2,"n":"HomeId","is":true,"t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_HomeId","t":8,"rt":$n[1].String,"fg":"HomeId","is":true},"fn":"HomeId"},{"a":2,"n":"MoveItId","is":true,"t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_MoveItId","t":8,"rt":$n[1].String,"fg":"MoveItId","is":true},"fn":"MoveItId"},{"a":2,"n":"StartGameId","is":true,"t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_StartGameId","t":8,"rt":$n[1].String,"fg":"StartGameId","is":true},"fn":"StartGameId"},{"a":2,"n":"Container","is":true,"t":4,"rt":$n[3].IIoc,"sn":"Container"}]}; }, $n);
    $m("Bridge.Spaf.SpafApp.Messages", function () { return {"td":$n[2].SpafApp,"nested":[$n[2].SpafApp.Messages.GlobalSender],"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"Sender","is":true,"t":4,"rt":$n[2].SpafApp.Messages.GlobalSender,"sn":"Sender"}]}; }, $n);
    $m("Bridge.Spaf.SpafApp.Messages.GlobalSender", function () { return {"td":$n[2].SpafApp.Messages,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    $m("AzureDay.Rome.Shared.GameState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Closed","is":true,"t":4,"rt":$n[4].GameState,"sn":"Closed","box":function ($v) { return Bridge.box($v, AzureDay.Rome.Shared.GameState, System.Enum.toStringFn(AzureDay.Rome.Shared.GameState));}},{"a":2,"n":"Finished","is":true,"t":4,"rt":$n[4].GameState,"sn":"Finished","box":function ($v) { return Bridge.box($v, AzureDay.Rome.Shared.GameState, System.Enum.toStringFn(AzureDay.Rome.Shared.GameState));}},{"a":2,"n":"InRun","is":true,"t":4,"rt":$n[4].GameState,"sn":"InRun","box":function ($v) { return Bridge.box($v, AzureDay.Rome.Shared.GameState, System.Enum.toStringFn(AzureDay.Rome.Shared.GameState));}},{"a":2,"n":"Register","is":true,"t":4,"rt":$n[4].GameState,"sn":"Register","box":function ($v) { return Bridge.box($v, AzureDay.Rome.Shared.GameState, System.Enum.toStringFn(AzureDay.Rome.Shared.GameState));}}]}; }, $n);
    $m("AzureDay.Rome.Shared.player", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ConnectionId","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_ConnectionId","t":8,"rt":$n[1].String,"fg":"connectionid"},"s":{"a":2,"n":"set_ConnectionId","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"connectionid"},"fn":"connectionid"},{"a":2,"n":"Id","t":16,"rt":$n[1].Guid,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[1].Guid,"fg":"id"},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[1].Guid],"rt":$n[1].Void,"fs":"id"},"fn":"id"},{"a":2,"n":"Name","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[1].String,"fg":"name"},"s":{"a":2,"n":"set_Name","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"name"},"fn":"name"}]}; }, $n);
    $m("AzureDay.Rome.Shared.team", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Id","t":16,"rt":$n[1].Guid,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[1].Guid,"fg":"id"},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[1].Guid],"rt":$n[1].Void,"fs":"id"},"fn":"id"},{"a":2,"n":"Name","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[1].String,"fg":"name"},"s":{"a":2,"n":"set_Name","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"name"},"fn":"name"},{"a":2,"n":"Players","t":16,"rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.player),"g":{"a":2,"n":"get_Players","t":8,"rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.player),"fg":"players"},"s":{"a":2,"n":"set_Players","t":8,"p":[$n[0].IEnumerable$1(AzureDay.Rome.Shared.player)],"rt":$n[1].Void,"fs":"players"},"fn":"players"}]}; }, $n);
    $m("AzureDay.Rome.Remote.SharedConfiguration", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"FinishLine","is":true,"t":4,"rt":$n[1].Int32,"sn":"FinishLine","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"MaxPlayers","is":true,"t":4,"rt":$n[1].Int32,"sn":"MaxPlayers","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    $m("AzureDay.Rome.Remote.DataSources.ITeamsDataSource", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"GetTeams","t":8,"sn":"AzureDay$Rome$Remote$DataSources$ITeamsDataSource$GetTeams","rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.team)}]}; }, $n);
    $m("AzureDay.Rome.Remote.DataSources.TeamsDataSource", function () { return {"att":1048576,"a":4,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetTeams","t":8,"sn":"GetTeams","rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.team)}]}; }, $n);
    $m("AzureDay.Rome.Client.ViewModels.MoveItViewModel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].IMoveItHub],"pi":[{"n":"moveItHub","pt":$n[5].IMoveItHub,"ps":0}],"sn":"ctor"},{"a":2,"n":"AddTen","t":8,"sn":"AddTen","rt":$n[1].Void},{"a":2,"n":"AddTenLeft","t":8,"sn":"AddTenLeft","rt":$n[1].Void},{"ov":true,"a":2,"n":"ElementId","t":8,"sn":"ElementId","rt":$n[1].String},{"a":1,"n":"MoveItHubOnOnLeftChanged","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[1].Int32,"ps":1}],"sn":"MoveItHubOnOnLeftChanged","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Int32]},{"a":1,"n":"MoveItHubOnOnTopChanged","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[1].Int32,"ps":1}],"sn":"MoveItHubOnOnTopChanged","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Int32]},{"ov":true,"a":2,"n":"OnLeave","t":8,"sn":"OnLeave","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnLoad","t":8,"pi":[{"n":"parameters","pt":$n[0].Dictionary$2(System.String,System.Object),"ps":0}],"sn":"OnLoad","rt":$n[1].Void,"p":[$n[0].Dictionary$2(System.String,System.Object)]},{"a":2,"n":"Left","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_Left","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"Left"},"s":{"a":2,"n":"set_Left","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"Left"},"fn":"Left"},{"a":2,"n":"Top","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_Top","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"Top"},"s":{"a":2,"n":"set_Top","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"Top"},"fn":"Top"},{"a":1,"n":"_left","t":4,"rt":$n[1].Int32,"sn":"_left","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_moveItHub","t":4,"rt":$n[5].IMoveItHub,"sn":"_moveItHub","ro":true},{"a":1,"n":"_top","t":4,"rt":$n[1].Int32,"sn":"_top","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    $m("AzureDay.Rome.Client.ViewModels.StartGameViewModel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[5].IGameHub,$n[6].ITeamRepository],"pi":[{"n":"gameHub","pt":$n[5].IGameHub,"ps":0},{"n":"teamRepository","pt":$n[6].ITeamRepository,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"ElementId","t":8,"sn":"ElementId","rt":$n[1].String},{"a":1,"n":"GameHubOnOnGameStateReceived","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[4].GameState,"ps":1}],"sn":"GameHubOnOnGameStateReceived","rt":$n[1].Void,"p":[$n[1].Object,$n[4].GameState]},{"a":1,"n":"GameHubOnOnNewPlayerJoined","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"tuple","pt":$n[1].Object,"ps":1}],"sn":"GameHubOnOnNewPlayerJoined","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Object]},{"a":1,"n":"GameHubOnOnPlayerLeaved","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"tuple","pt":$n[1].Object,"ps":1}],"sn":"GameHubOnOnPlayerLeaved","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Object]},{"a":1,"n":"GameHubOnOnTapCountReceived","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[1].Object,"ps":1}],"sn":"GameHubOnOnTapCountReceived","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Object]},{"a":1,"n":"GetTeamById","t":8,"pi":[{"n":"id","pt":$n[1].Guid,"ps":0}],"sn":"GetTeamById","rt":$n[7].TeamViewModel,"p":[$n[1].Guid]},{"ov":true,"a":2,"n":"OnLeave","t":8,"sn":"OnLeave","rt":$n[1].Void},{"ov":true,"a":2,"n":"OnLoad","t":8,"pi":[{"n":"parameters","pt":$n[0].Dictionary$2(System.String,System.Object),"ps":0}],"sn":"OnLoad","rt":$n[1].Void,"p":[$n[0].Dictionary$2(System.String,System.Object)]},{"a":1,"n":"OnTooManyPlayers","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[1].Object,"ps":1}],"sn":"OnTooManyPlayers","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Object]},{"a":2,"n":"OpenRegistration","t":8,"sn":"OpenRegistration","rt":$n[1].Void},{"a":2,"n":"ReStartGame","t":8,"sn":"ReStartGame","rt":$n[1].Void},{"a":1,"n":"ResetTeams","t":8,"sn":"ResetTeams","rt":$n[1].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[1].Void},{"a":2,"n":"StopGame","t":8,"sn":"StopGame","rt":$n[1].Void},{"a":1,"n":"ALlPlayers","t":16,"rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.player),"g":{"a":1,"n":"get_ALlPlayers","t":8,"rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.player),"fg":"ALlPlayers"},"fn":"ALlPlayers"},{"a":2,"n":"State","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_State","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"State"},"s":{"a":2,"n":"set_State","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"State"},"fn":"State"},{"a":2,"n":"TeamViewModels","t":16,"rt":Bridge.virtualc("KnockoutObservableArray"),"g":{"a":2,"n":"get_TeamViewModels","t":8,"rt":Bridge.virtualc("KnockoutObservableArray"),"fg":"TeamViewModels"},"s":{"a":2,"n":"set_TeamViewModels","t":8,"p":[Bridge.virtualc("KnockoutObservableArray")],"rt":$n[1].Void,"fs":"TeamViewModels"},"fn":"TeamViewModels"},{"a":1,"n":"FinishLineOffset","is":true,"t":4,"rt":$n[1].Int32,"sn":"FinishLineOffset","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"SpaceShipWidth","is":true,"t":4,"rt":$n[1].Int32,"sn":"SpaceShipWidth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_gameHub","t":4,"rt":$n[5].IGameHub,"sn":"_gameHub","ro":true},{"a":1,"n":"_tapCount","t":4,"rt":$n[1].Double,"sn":"_tapCount","box":function ($v) { return Bridge.box($v, System.Double, System.Double.format, System.Double.getHashCode);}},{"a":1,"n":"_teamRepository","t":4,"rt":$n[6].ITeamRepository,"sn":"_teamRepository","ro":true}]}; }, $n);
    $m("AzureDay.Rome.Client.ViewModels.Models.TeamViewModel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].team],"pi":[{"n":"team","pt":$n[4].team,"ps":0}],"sn":"ctor"},{"a":2,"n":"CssClass","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_CssClass","t":8,"rt":$n[1].String,"fg":"CssClass"},"s":{"a":2,"n":"set_CssClass","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"CssClass"},"fn":"CssClass"},{"a":2,"n":"HowMany","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_HowMany","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"HowMany"},"s":{"a":2,"n":"set_HowMany","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"HowMany"},"fn":"HowMany"},{"a":2,"n":"Id","t":16,"rt":$n[1].Guid,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[1].Guid,"fg":"Id"},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[1].Guid],"rt":$n[1].Void,"fs":"Id"},"fn":"Id"},{"a":2,"n":"IsWinner","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_IsWinner","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"IsWinner"},"s":{"a":2,"n":"set_IsWinner","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"IsWinner"},"fn":"IsWinner"},{"a":2,"n":"Name","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get_Name","t":8,"rt":$n[1].String,"fg":"Name"},"s":{"a":2,"n":"set_Name","t":8,"p":[$n[1].String],"rt":$n[1].Void,"fs":"Name"},"fn":"Name"},{"a":2,"n":"Players","t":16,"rt":Bridge.virtualc("KnockoutObservableArray"),"g":{"a":2,"n":"get_Players","t":8,"rt":Bridge.virtualc("KnockoutObservableArray"),"fg":"Players"},"s":{"a":2,"n":"set_Players","t":8,"p":[Bridge.virtualc("KnockoutObservableArray")],"rt":$n[1].Void,"fs":"Players"},"fn":"Players"},{"a":2,"n":"Score","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_Score","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"Score"},"s":{"a":2,"n":"set_Score","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"Score"},"fn":"Score"},{"a":2,"n":"ScreenPosition","t":16,"rt":Bridge.virtualc("KnockoutObservable"),"g":{"a":2,"n":"get_ScreenPosition","t":8,"rt":Bridge.virtualc("KnockoutObservable"),"fg":"ScreenPosition"},"s":{"a":2,"n":"set_ScreenPosition","t":8,"p":[Bridge.virtualc("KnockoutObservable")],"rt":$n[1].Void,"fs":"ScreenPosition"},"fn":"ScreenPosition"}]}; }, $n);
    $m("AzureDay.Rome.Client.Repositories.ITeamRepository", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"GetTeamById","t":8,"pi":[{"n":"id","pt":$n[1].Guid,"ps":0}],"sn":"AzureDay$Rome$Client$Repositories$ITeamRepository$GetTeamById","rt":$n[4].team,"p":[$n[1].Guid]},{"ab":true,"a":2,"n":"GetTeams","t":8,"sn":"AzureDay$Rome$Client$Repositories$ITeamRepository$GetTeams","rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.team)}]}; }, $n);
    $m("AzureDay.Rome.Client.Repositories.Impl.TeamRepository", function () { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].ITeamsDataSource],"pi":[{"n":"teamsDataSource","pt":$n[8].ITeamsDataSource,"ps":0}],"sn":"ctor"},{"a":2,"n":"GetTeamById","t":8,"pi":[{"n":"id","pt":$n[1].Guid,"ps":0}],"sn":"GetTeamById","rt":$n[4].team,"p":[$n[1].Guid]},{"a":2,"n":"GetTeams","t":8,"sn":"GetTeams","rt":$n[0].IEnumerable$1(AzureDay.Rome.Shared.team)},{"a":1,"n":"_teamsDataSource","t":4,"rt":$n[8].ITeamsDataSource,"sn":"_teamsDataSource","ro":true}]}; }, $n);
    $m("AzureDay.Rome.Client.Hubs.IBaseHub", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Start","t":8,"pi":[{"n":"onConnected","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IBaseHub$Start","rt":$n[1].Void,"p":[Function]},{"ab":true,"a":2,"n":"Stop","t":8,"sn":"AzureDay$Rome$Client$Hubs$IBaseHub$Stop","rt":$n[1].Void}]}; }, $n);
    $m("AzureDay.Rome.Client.Hubs.IGameHub", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"NotifyIAmTheAdmin","t":8,"sn":"AzureDay$Rome$Client$Hubs$IGameHub$NotifyIAmTheAdmin","rt":$n[1].Void},{"ab":true,"a":2,"n":"OpenRegistration","t":8,"sn":"AzureDay$Rome$Client$Hubs$IGameHub$OpenRegistration","rt":$n[1].Void},{"ab":true,"a":2,"n":"ReStartGame","t":8,"sn":"AzureDay$Rome$Client$Hubs$IGameHub$ReStartGame","rt":$n[1].Void},{"ab":true,"a":2,"n":"StartGame","t":8,"sn":"AzureDay$Rome$Client$Hubs$IGameHub$StartGame","rt":$n[1].Void},{"ab":true,"a":2,"n":"StopGame","t":8,"sn":"AzureDay$Rome$Client$Hubs$IGameHub$StopGame","rt":$n[1].Void},{"ab":true,"a":2,"n":"OnGameStateReceived","t":2,"ad":{"ab":true,"a":2,"n":"add_OnGameStateReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$addOnGameStateReceived","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnGameStateReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$removeOnGameStateReceived","rt":$n[1].Void,"p":[Function]}},{"ab":true,"a":2,"n":"OnNewPlayerJoined","t":2,"ad":{"ab":true,"a":2,"n":"add_OnNewPlayerJoined","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$addOnNewPlayerJoined","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnNewPlayerJoined","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$removeOnNewPlayerJoined","rt":$n[1].Void,"p":[Function]}},{"ab":true,"a":2,"n":"OnPlayerLeaved","t":2,"ad":{"ab":true,"a":2,"n":"add_OnPlayerLeaved","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$addOnPlayerLeaved","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnPlayerLeaved","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$removeOnPlayerLeaved","rt":$n[1].Void,"p":[Function]}},{"ab":true,"a":2,"n":"OnTapCountReceived","t":2,"ad":{"ab":true,"a":2,"n":"add_OnTapCountReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$addOnTapCountReceived","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnTapCountReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$removeOnTapCountReceived","rt":$n[1].Void,"p":[Function]}},{"ab":true,"a":2,"n":"OnTooManyPlayers","t":2,"ad":{"ab":true,"a":2,"n":"add_OnTooManyPlayers","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$addOnTooManyPlayers","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnTooManyPlayers","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IGameHub$removeOnTooManyPlayers","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    $m("AzureDay.Rome.Client.Hubs.IMoveItHub", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"SendLeft","t":8,"pi":[{"n":"left","pt":$n[1].Int32,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$SendLeft","rt":$n[1].Void,"p":[$n[1].Int32]},{"ab":true,"a":2,"n":"SendTop","t":8,"pi":[{"n":"top","pt":$n[1].Int32,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$SendTop","rt":$n[1].Void,"p":[$n[1].Int32]},{"ab":true,"a":2,"n":"OnLeftChanged","t":2,"ad":{"ab":true,"a":2,"n":"add_OnLeftChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$addOnLeftChanged","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnLeftChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$removeOnLeftChanged","rt":$n[1].Void,"p":[Function]}},{"ab":true,"a":2,"n":"OnTopChanged","t":2,"ad":{"ab":true,"a":2,"n":"add_OnTopChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$addOnTopChanged","rt":$n[1].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_OnTopChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"AzureDay$Rome$Client$Hubs$IMoveItHub$removeOnTopChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    $m("AzureDay.Rome.Client.Hubs.Impl.GameHub", function () { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"NotifyIAmTheAdmin","t":8,"sn":"NotifyIAmTheAdmin","rt":$n[1].Void},{"a":2,"n":"OpenRegistration","t":8,"sn":"OpenRegistration","rt":$n[1].Void},{"a":2,"n":"ReStartGame","t":8,"sn":"ReStartGame","rt":$n[1].Void},{"a":2,"n":"Start","t":8,"pi":[{"n":"onConnected","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"Start","rt":$n[1].Void,"p":[Function]},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[1].Void},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[1].Void},{"a":2,"n":"StopGame","t":8,"sn":"StopGame","rt":$n[1].Void},{"a":1,"n":"_connection","t":4,"rt":signalR.HubConnection,"sn":"_connection"},{"a":2,"n":"OnGameStateReceived","t":2,"ad":{"a":2,"n":"add_OnGameStateReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnGameStateReceived","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnGameStateReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnGameStateReceived","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnNewPlayerJoined","t":2,"ad":{"a":2,"n":"add_OnNewPlayerJoined","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnNewPlayerJoined","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnNewPlayerJoined","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnNewPlayerJoined","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnPlayerLeaved","t":2,"ad":{"a":2,"n":"add_OnPlayerLeaved","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnPlayerLeaved","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnPlayerLeaved","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnPlayerLeaved","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnTapCountReceived","t":2,"ad":{"a":2,"n":"add_OnTapCountReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTapCountReceived","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTapCountReceived","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTapCountReceived","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnTooManyPlayers","t":2,"ad":{"a":2,"n":"add_OnTooManyPlayers","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTooManyPlayers","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTooManyPlayers","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTooManyPlayers","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    $m("AzureDay.Rome.Client.Hubs.Impl.MoveItHub", function () { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SendLeft","t":8,"pi":[{"n":"left","pt":$n[1].Int32,"ps":0}],"sn":"SendLeft","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SendTop","t":8,"pi":[{"n":"top","pt":$n[1].Int32,"ps":0}],"sn":"SendTop","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"Start","t":8,"pi":[{"n":"onConnected","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"Start","rt":$n[1].Void,"p":[Function]},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[1].Void},{"a":1,"n":"_connection","t":4,"rt":signalR.HubConnection,"sn":"_connection","ro":true},{"a":2,"n":"OnLeftChanged","t":2,"ad":{"a":2,"n":"add_OnLeftChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLeftChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLeftChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLeftChanged","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnTopChanged","t":2,"ad":{"a":2,"n":"add_OnTopChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnTopChanged","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnTopChanged","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnTopChanged","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    $m("AzureDay.Rome.Client.Classes.WaitForMe$2", function (T, TK) { return {"att":1048576,"a":4,"m":[{"a":2,"n":".ctor","t":1,"p":[T,Function],"pi":[{"n":"obj","pt":T,"ps":0},{"n":"eventname","pt":Function,"ps":1}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[T,$n[1].String],"pi":[{"n":"obj","pt":T,"ps":0},{"n":"eventNAme","pt":$n[1].String,"ps":1}],"sn":"$ctor1"},{"a":1,"n":"OnComplete","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"handler","pt":TK,"ps":1}],"sn":"OnComplete","rt":$n[1].Void,"p":[$n[1].Object,TK]},{"a":1,"n":"Subscribe","t":8,"pi":[{"n":"obj","pt":T,"ps":0},{"n":"eventName","pt":$n[1].String,"ps":1}],"sn":"Subscribe","rt":$n[1].Void,"p":[T,$n[1].String]},{"a":2,"n":"Task","t":16,"rt":$n[9].Task$1(TK),"g":{"a":2,"n":"get_Task","t":8,"rt":$n[9].Task$1(TK),"fg":"Task"},"fn":"Task"},{"a":1,"n":"_complete","t":4,"rt":$n[9].TaskCompletionSource,"sn":"_complete","ro":true},{"a":1,"n":"_eventInfo","t":4,"rt":$n[10].EventInfo,"sn":"_eventInfo"},{"a":1,"n":"_handler","t":4,"rt":Function,"sn":"_handler"},{"a":1,"n":"_obj","t":4,"rt":T,"sn":"_obj"}]}; }, $n);
});
